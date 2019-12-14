import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошевелить: PerfectVerb = {
  name: Word('пошевелить', 7),
  singular1stPerson: Word('пошевелю', 7),
  singular2ndPerson: Word('пошевелишь', 7),
  singular3rdPerson: Word('пошевелит', 7),
  plural1stPerson: Word('пошевелим', 7),
  plural2ndPerson: Word('пошевелите', 7),
  plural3rdPerson: Word('пошевелят', 7),
  masculinePast: Word('пошевелил', 7),
  femininePast: Word('пошевелила', 7),
  neuterPast: Word('пошевелило', 7),
  pluralPast: Word('пошевелили', 7),
  imperativeInformal: Word('пошевели', 7),
  imperativeFormal: Word('пошевелите', 7),
  imperfect: [],
};

perfectVerbs.set(пошевелить.name.text, пошевелить);

export { пошевелить };