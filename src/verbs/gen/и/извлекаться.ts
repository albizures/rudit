import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извлекаться: PerfectVerb = {
  name: Word('извлекаться', 6),
  singular1stPerson: Word('извлекаюсь', 6),
  singular2ndPerson: Word('извлекаешься', 6),
  singular3rdPerson: Word('извлекается', 6),
  plural1stPerson: Word('извлекаемся', 6),
  plural2ndPerson: Word('извлекаетесь', 6),
  plural3rdPerson: Word('извлекаются', 6),
  masculinePast: Word('извлекался', 6),
  femininePast: Word('извлекалась', 6),
  neuterPast: Word('извлекалось', 6),
  pluralPast: Word('извлекались', 6),
  imperativeInformal: Word('извлекайся', 6),
  imperativeFormal: Word('извлекайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(извлекаться.name.text, извлекаться);

export { извлекаться };