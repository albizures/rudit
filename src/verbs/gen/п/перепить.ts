import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепить: PerfectVerb = {
  name: Word('перепить', 5),
  singular1stPerson: Word('перепью', 6),
  singular2ndPerson: Word('перепьёшь', 6),
  singular3rdPerson: Word('перепьёт', 6),
  plural1stPerson: Word('перепьём', 6),
  plural2ndPerson: Word('перепьёте', 6),
  plural3rdPerson: Word('перепьют', 6),
  masculinePast: Word('перепил', 5),
  femininePast: Word('перепила', 7),
  neuterPast: Word('перепило', 5),
  pluralPast: Word('перепили', 5),
  imperativeInformal: Word('перепей', 5),
  imperativeFormal: Word('перепейте', 5),
  imperfect: [],
};

perfectVerbs.set(перепить.name.text, перепить);

export { перепить };