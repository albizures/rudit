import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оканчиваться: PerfectVerb = {
  name: Word('оканчиваться', 2),
  singular1stPerson: Word('оканчиваюсь', 2),
  singular2ndPerson: Word('оканчиваешься', 2),
  singular3rdPerson: Word('оканчивается', 2),
  plural1stPerson: Word('оканчиваемся', 2),
  plural2ndPerson: Word('оканчиваетесь', 2),
  plural3rdPerson: Word('оканчиваются', 2),
  masculinePast: Word('оканчивался', 2),
  femininePast: Word('оканчивалась', 2),
  neuterPast: Word('оканчивалось', 2),
  pluralPast: Word('оканчивались', 2),
  imperativeInformal: Word('оканчивайся', 2),
  imperativeFormal: Word('оканчивайтесь', 2),
  imperfect: ['окончиться'],
};

perfectVerbs.set(оканчиваться.name.text, оканчиваться);

export { оканчиваться };