import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымыться: PerfectVerb = {
  name: Word('вымыться', 1),
  singular1stPerson: Word('вымоюсь', 1),
  singular2ndPerson: Word('вымоешься', 1),
  singular3rdPerson: Word('вымоется', 1),
  plural1stPerson: Word('вымоемся', 1),
  plural2ndPerson: Word('вымоетесь', 1),
  plural3rdPerson: Word('вымоются', 1),
  masculinePast: Word('вымылся', 1),
  femininePast: Word('вымылась', 1),
  neuterPast: Word('вымылось', 1),
  pluralPast: Word('вымылись', 1),
  imperativeInformal: Word('вымойся', 1),
  imperativeFormal: Word('вымойтесь', 1),
  imperfect: [],
};

perfectVerbs.set(вымыться.name.text, вымыться);

export { вымыться };