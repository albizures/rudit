import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убить: PerfectVerb = {
  name: Word('убить', 2),
  singular1stPerson: Word('убью', 3),
  singular2ndPerson: Word('убьёшь', 3),
  singular3rdPerson: Word('убьёт', 3),
  plural1stPerson: Word('убьём', 3),
  plural2ndPerson: Word('убьёте', 3),
  plural3rdPerson: Word('убьют', 3),
  masculinePast: Word('убил', 2),
  femininePast: Word('убила', 2),
  neuterPast: Word('убило', 2),
  pluralPast: Word('убили', 2),
  imperativeInformal: Word('убей', 2),
  imperativeFormal: Word('убейте', 2),
  imperfect: ['убивать'],
};

perfectVerbs.set(убить.name.text, убить);

export { убить };