import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебить: PerfectVerb = {
  name: Word('перебить', 5),
  singular1stPerson: Word('перебью', 6),
  singular2ndPerson: Word('перебьёшь', 1),
  singular3rdPerson: Word('перебьёт', 1),
  plural1stPerson: Word('перебьём', 1),
  plural2ndPerson: Word('перебьёте', 1),
  plural3rdPerson: Word('перебьют', 6),
  masculinePast: Word('перебил', 5),
  femininePast: Word('перебила', 5),
  neuterPast: Word('перебило', 5),
  pluralPast: Word('перебили', 5),
  imperativeInformal: Word('перебей', 5),
  imperativeFormal: Word('перебейте', 5),
  imperfect: ['перебивать'],
};

perfectVerbs.set(перебить.name.text, перебить);

export { перебить };