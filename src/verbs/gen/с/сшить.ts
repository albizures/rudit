import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сшить: PerfectVerb = {
  name: Word('сшить', 2),
  singular1stPerson: Word('сошью', 4),
  singular2ndPerson: Word('сошьёшь', 4),
  singular3rdPerson: Word('сошьёт', 4),
  plural1stPerson: Word('сошьём', 4),
  plural2ndPerson: Word('сошьёте', 4),
  plural3rdPerson: Word('сошьют', 4),
  masculinePast: Word('сшил', 2),
  femininePast: Word('сшила', 2),
  neuterPast: Word('сшило', 2),
  pluralPast: Word('сшили', 2),
  imperativeInformal: Word('сшей', 2),
  imperativeFormal: Word('сшейте', 2),
  imperfect: ['шить','сшивать'],
};

perfectVerbs.set(сшить.name.text, сшить);

export { сшить };