import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемолотить: PerfectVerb = {
  name: Word('перемолотить', 9),
  singular1stPerson: Word('перемолочу', 9),
  singular2ndPerson: Word('перемолотишь', 7),
  singular3rdPerson: Word('перемолотит', 7),
  plural1stPerson: Word('перемолотим', 7),
  plural2ndPerson: Word('перемолотите', 7),
  plural3rdPerson: Word('перемолотят', 7),
  masculinePast: Word('перемолотил', 9),
  femininePast: Word('перемолотила', 9),
  neuterPast: Word('перемолотило', 9),
  pluralPast: Word('перемолотили', 9),
  imperativeInformal: Word('перемолоти', 9),
  imperativeFormal: Word('перемолотите', 9),
  imperfect: [],
};

perfectVerbs.set(перемолотить.name.text, перемолотить);

export { перемолотить };