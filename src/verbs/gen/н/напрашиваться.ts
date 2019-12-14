import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const напрашиваться: PerfectVerb = {
  name: Word('напрашиваться', 4),
  singular1stPerson: Word('напрашиваюсь', 4),
  singular2ndPerson: Word('напрашиваешься', 4),
  singular3rdPerson: Word('напрашивается', 4),
  plural1stPerson: Word('напрашиваемся', 4),
  plural2ndPerson: Word('напрашиваетесь', 4),
  plural3rdPerson: Word('напрашиваются', 4),
  masculinePast: Word('напрашивался', 4),
  femininePast: Word('напрашивалась', 4),
  neuterPast: Word('напрашивалось', 4),
  pluralPast: Word('напрашивались', 4),
  imperativeInformal: Word('напрашивайся', 4),
  imperativeFormal: Word('напрашивайтесь', 4),
  imperfect: ['напроситься'],
};

perfectVerbs.set(напрашиваться.name.text, напрашиваться);

export { напрашиваться };