import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошевелиться: PerfectVerb = {
  name: Word('пошевелиться', 7),
  singular1stPerson: Word('пошевелюсь', 7),
  singular2ndPerson: Word('пошевелишься', 7),
  singular3rdPerson: Word('пошевелится', 7),
  plural1stPerson: Word('пошевелимся', 7),
  plural2ndPerson: Word('пошевелитесь', 7),
  plural3rdPerson: Word('пошевелятся', 7),
  masculinePast: Word('пошевелился', 7),
  femininePast: Word('пошевелилась', 7),
  neuterPast: Word('пошевелилось', 7),
  pluralPast: Word('пошевелились', 7),
  imperativeInformal: Word('пошевелись', 7),
  imperativeFormal: Word('пошевелитесь', 7),
  imperfect: [],
};

perfectVerbs.set(пошевелиться.name.text, пошевелиться);

export { пошевелиться };