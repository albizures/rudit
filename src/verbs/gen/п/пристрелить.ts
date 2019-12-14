import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пристрелить: PerfectVerb = {
  name: Word('пристрелить', 8),
  singular1stPerson: Word('пристрелю', 8),
  singular2ndPerson: Word('пристрелишь', 6),
  singular3rdPerson: Word('пристрелит', 6),
  plural1stPerson: Word('пристрелим', 6),
  plural2ndPerson: Word('пристрелите', 6),
  plural3rdPerson: Word('пристрелят', 6),
  masculinePast: Word('пристрелил', 8),
  femininePast: Word('пристрелила', 8),
  neuterPast: Word('пристрелило', 8),
  pluralPast: Word('пристрелили', 8),
  imperativeInformal: Word('пристрели', 8),
  imperativeFormal: Word('пристрелите', 8),
  imperfect: [],
};

perfectVerbs.set(пристрелить.name.text, пристрелить);

export { пристрелить };