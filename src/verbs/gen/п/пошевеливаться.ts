import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошевеливаться: PerfectVerb = {
  name: Word('пошевеливаться', 5),
  singular1stPerson: Word('пошевеливаюсь', 5),
  singular2ndPerson: Word('пошевеливаешься', 5),
  singular3rdPerson: Word('пошевеливается', 5),
  plural1stPerson: Word('пошевеливаемся', 5),
  plural2ndPerson: Word('пошевеливаетесь', 5),
  plural3rdPerson: Word('пошевеливаются', 5),
  masculinePast: Word('пошевеливался', 5),
  femininePast: Word('пошевеливалась', 5),
  neuterPast: Word('пошевеливалось', 5),
  pluralPast: Word('пошевеливались', 5),
  imperativeInformal: Word('пошевеливайся', 5),
  imperativeFormal: Word('пошевеливайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(пошевеливаться.name.text, пошевеливаться);

export { пошевеливаться };