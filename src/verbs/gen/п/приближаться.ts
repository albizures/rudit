import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приближаться: PerfectVerb = {
  name: Word('приближаться', 7),
  singular1stPerson: Word('приближаюсь', 7),
  singular2ndPerson: Word('приближаешься', 7),
  singular3rdPerson: Word('приближается', 7),
  plural1stPerson: Word('приближаемся', 7),
  plural2ndPerson: Word('приближаетесь', 7),
  plural3rdPerson: Word('приближаются', 7),
  masculinePast: Word('приближался', 7),
  femininePast: Word('приближалась', 7),
  neuterPast: Word('приближалось', 7),
  pluralPast: Word('приближались', 7),
  imperativeInformal: Word('приближайся', 7),
  imperativeFormal: Word('приближайтесь', 7),
  imperfect: ['приблизиться'],
};

perfectVerbs.set(приближаться.name.text, приближаться);

export { приближаться };