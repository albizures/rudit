import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напрактиковаться: PerfectVerb = {
  name: Word('напрактиковаться', 11),
  singular1stPerson: Word('напрактикуюсь', 9),
  singular2ndPerson: Word('напрактикуешься', 9),
  singular3rdPerson: Word('напрактикуется', 9),
  plural1stPerson: Word('напрактикуемся', 9),
  plural2ndPerson: Word('напрактикуетесь', 9),
  plural3rdPerson: Word('напрактикуются', 9),
  masculinePast: Word('напрактиковался', 11),
  femininePast: Word('напрактиковалась', 11),
  neuterPast: Word('напрактиковалось', 11),
  pluralPast: Word('напрактиковались', 11),
  imperativeInformal: Word('напрактикуйся', 9),
  imperativeFormal: Word('напрактикуйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(напрактиковаться.name.text, напрактиковаться);

export { напрактиковаться };