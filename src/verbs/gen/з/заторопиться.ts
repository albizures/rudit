import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заторопиться: PerfectVerb = {
  name: Word('заторопиться', 7),
  singular1stPerson: Word('затороплюсь', 8),
  singular2ndPerson: Word('заторопишься', 5),
  singular3rdPerson: Word('заторопится', 5),
  plural1stPerson: Word('заторопимся', 5),
  plural2ndPerson: Word('заторопитесь', 5),
  plural3rdPerson: Word('заторопятся', 5),
  masculinePast: Word('заторопился', 7),
  femininePast: Word('заторопилась', 7),
  neuterPast: Word('заторопилось', 7),
  pluralPast: Word('заторопились', 7),
  imperativeInformal: Word('заторопись', 7),
  imperativeFormal: Word('заторопитесь', 7),
  imperfect: [],
};

perfectVerbs.set(заторопиться.name.text, заторопиться);

export { заторопиться };