import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const целоваться: PerfectVerb = {
  name: Word('целоваться', 5),
  singular1stPerson: Word('целуюсь', 3),
  singular2ndPerson: Word('целуешься', 3),
  singular3rdPerson: Word('целуется', 3),
  plural1stPerson: Word('целуемся', 3),
  plural2ndPerson: Word('целуетесь', 3),
  plural3rdPerson: Word('целуются', 3),
  masculinePast: Word('целовался', 5),
  femininePast: Word('целовалась', 5),
  neuterPast: Word('целовалось', 5),
  pluralPast: Word('целовались', 5),
  imperativeInformal: Word('целуйся', 3),
  imperativeFormal: Word('целуйтесь', 3),
  imperfect: ['поцеловаться'],
};

perfectVerbs.set(целоваться.name.text, целоваться);

export { целоваться };