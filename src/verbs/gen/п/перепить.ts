import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепить: PerfectVerb = {
  name: Word('перепить', 5),
  singular1stPerson: Word('перепью', 6),
  singular2ndPerson: Word('перепьёшь', 1),
  singular3rdPerson: Word('перепьёт', 1),
  plural1stPerson: Word('перепьём', 1),
  plural2ndPerson: Word('перепьёте', 1),
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