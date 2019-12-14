import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const эвакуироваться: PerfectVerb = {
  name: Word('эвакуироваться', 5),
  singular1stPerson: Word('эвакуируюсь', 5),
  singular2ndPerson: Word('эвакуируешься', 5),
  singular3rdPerson: Word('эвакуируется', 5),
  plural1stPerson: Word('эвакуируемся', 5),
  plural2ndPerson: Word('эвакуируетесь', 5),
  plural3rdPerson: Word('эвакуируются', 5),
  masculinePast: Word('эвакуировался', 5),
  femininePast: Word('эвакуировалась', 5),
  neuterPast: Word('эвакуировалось', 5),
  pluralPast: Word('эвакуировались', 5),
  imperativeInformal: Word('эвакуируйся', 5),
  imperativeFormal: Word('эвакуируйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(эвакуироваться.name.text, эвакуироваться);

export { эвакуироваться };