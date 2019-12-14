import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const освобождаться: PerfectVerb = {
  name: Word('освобождаться', 8),
  singular1stPerson: Word('освобождаюсь', 8),
  singular2ndPerson: Word('освобождаешься', 8),
  singular3rdPerson: Word('освобождается', 8),
  plural1stPerson: Word('освобождаемся', 8),
  plural2ndPerson: Word('освобождаетесь', 8),
  plural3rdPerson: Word('освобождаются', 8),
  masculinePast: Word('освобождался', 8),
  femininePast: Word('освобождалась', 8),
  neuterPast: Word('освобождалось', 8),
  pluralPast: Word('освобождались', 8),
  imperativeInformal: Word('освобождайся', 8),
  imperativeFormal: Word('освобождайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(освобождаться.name.text, освобождаться);

export { освобождаться };