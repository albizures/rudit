import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исчахнуть: PerfectVerb = {
  name: Word('исчахнуть', 3),
  singular1stPerson: Word('исчахну', 3),
  singular2ndPerson: Word('исчахнешь', 3),
  singular3rdPerson: Word('исчахнет', 3),
  plural1stPerson: Word('исчахнем', 3),
  plural2ndPerson: Word('исчахнете', 3),
  plural3rdPerson: Word('исчахнут', 3),
  masculinePast: Word('исчах', 3),
  femininePast: Word('исчахла', 3),
  neuterPast: Word('исчахло', 3),
  pluralPast: Word('исчахли', 3),
  imperativeInformal: Word('исчахни', 3),
  imperativeFormal: Word('исчахните', 3),
  imperfect: [],
};

perfectVerbs.set(исчахнуть.name.text, исчахнуть);

export { исчахнуть };