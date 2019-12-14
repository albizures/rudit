import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пристреливаться: PerfectVerb = {
  name: Word('пристреливаться', 6),
  singular1stPerson: Word('пристреливаюсь', 6),
  singular2ndPerson: Word('пристреливаешься', 6),
  singular3rdPerson: Word('пристреливается', 6),
  plural1stPerson: Word('пристреливаемся', 6),
  plural2ndPerson: Word('пристреливаетесь', 6),
  plural3rdPerson: Word('пристреливаются', 6),
  masculinePast: Word('пристреливался', 6),
  femininePast: Word('пристреливалась', 6),
  neuterPast: Word('пристреливалось', 6),
  pluralPast: Word('пристреливались', 6),
  imperativeInformal: Word('пристреливайся', 6),
  imperativeFormal: Word('пристреливайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(пристреливаться.name.text, пристреливаться);

export { пристреливаться };