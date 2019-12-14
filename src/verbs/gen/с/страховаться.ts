import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const страховаться: PerfectVerb = {
  name: Word('страховаться', 7),
  singular1stPerson: Word('страхуюсь', 5),
  singular2ndPerson: Word('страхуешься', 5),
  singular3rdPerson: Word('страхуется', 5),
  plural1stPerson: Word('страхуемся', 5),
  plural2ndPerson: Word('страхуетесь', 5),
  plural3rdPerson: Word('страхуются', 5),
  masculinePast: Word('страховался', 7),
  femininePast: Word('страховалась', 7),
  neuterPast: Word('страховалось', 7),
  pluralPast: Word('страховались', 7),
  imperativeInformal: Word('страхуйся', 5),
  imperativeFormal: Word('страхуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(страховаться.name.text, страховаться);

export { страховаться };