import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привыкнуть: PerfectVerb = {
  name: Word('привыкнуть', 4),
  singular1stPerson: Word('привыкну', 4),
  singular2ndPerson: Word('привыкнешь', 4),
  singular3rdPerson: Word('привыкнет', 4),
  plural1stPerson: Word('привыкнем', 4),
  plural2ndPerson: Word('привыкнете', 4),
  plural3rdPerson: Word('привыкнут', 4),
  masculinePast: Word('привык', 4),
  femininePast: Word('привыкла', 4),
  neuterPast: Word('привыкло', 4),
  pluralPast: Word('привыкли', 4),
  imperativeInformal: Word('привыкни', 4),
  imperativeFormal: Word('привыкните', 4),
  imperfect: ['привыкать'],
};

perfectVerbs.set(привыкнуть.name.text, привыкнуть);

export { привыкнуть };