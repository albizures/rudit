import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наплодиться: PerfectVerb = {
  name: Word('наплодиться', 6),
  singular1stPerson: Word('напложусь', 6),
  singular2ndPerson: Word('наплодишься', 6),
  singular3rdPerson: Word('наплодится', 6),
  plural1stPerson: Word('наплодимся', 6),
  plural2ndPerson: Word('наплодитесь', 6),
  plural3rdPerson: Word('наплодятся', 6),
  masculinePast: Word('наплодился', 6),
  femininePast: Word('наплодилась', 6),
  neuterPast: Word('наплодилось', 6),
  pluralPast: Word('наплодились', 6),
  imperativeInformal: Word('наплодись', 6),
  imperativeFormal: Word('наплодитесь', 6),
  imperfect: [],
};

perfectVerbs.set(наплодиться.name.text, наплодиться);

export { наплодиться };