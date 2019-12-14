import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набрякнуть: PerfectVerb = {
  name: Word('набрякнуть', 4),
  singular1stPerson: Word('набрякну', 4),
  singular2ndPerson: Word('набрякнешь', 4),
  singular3rdPerson: Word('набрякнет', 4),
  plural1stPerson: Word('набрякнем', 4),
  plural2ndPerson: Word('набрякнете', 4),
  plural3rdPerson: Word('набрякнут', 4),
  masculinePast: Word('набряк', 4),
  femininePast: Word('набрякла', 4),
  neuterPast: Word('набрякло', 4),
  pluralPast: Word('набрякли', 4),
  imperativeInformal: Word('набрякни', 4),
  imperativeFormal: Word('набрякните', 4),
  imperfect: [],
};

perfectVerbs.set(набрякнуть.name.text, набрякнуть);

export { набрякнуть };