import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевыполнить: PerfectVerb = {
  name: Word('перевыполнить', 5),
  singular1stPerson: Word('перевыполню', 5),
  singular2ndPerson: Word('перевыполнишь', 5),
  singular3rdPerson: Word('перевыполнит', 5),
  plural1stPerson: Word('перевыполним', 5),
  plural2ndPerson: Word('перевыполните', 5),
  plural3rdPerson: Word('перевыполнят', 5),
  masculinePast: Word('перевыполнил', 5),
  femininePast: Word('перевыполнила', 5),
  neuterPast: Word('перевыполнило', 5),
  pluralPast: Word('перевыполнили', 5),
  imperativeInformal: Word('перевыполни', 5),
  imperativeFormal: Word('перевыполните', 5),
  imperfect: [],
};

perfectVerbs.set(перевыполнить.name.text, перевыполнить);

export { перевыполнить };