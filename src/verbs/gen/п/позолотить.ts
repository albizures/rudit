import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позолотить: PerfectVerb = {
  name: Word('позолотить', 7),
  singular1stPerson: Word('позолочу', 7),
  singular2ndPerson: Word('позолотишь', 7),
  singular3rdPerson: Word('позолотит', 7),
  plural1stPerson: Word('позолотим', 7),
  plural2ndPerson: Word('позолотите', 7),
  plural3rdPerson: Word('позолотят', 7),
  masculinePast: Word('позолотил', 7),
  femininePast: Word('позолотила', 7),
  neuterPast: Word('позолотило', 7),
  pluralPast: Word('позолотили', 7),
  imperativeInformal: Word('позолоти', 7),
  imperativeFormal: Word('позолотите', 7),
  imperfect: [],
};

perfectVerbs.set(позолотить.name.text, позолотить);

export { позолотить };