import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерыть: PerfectVerb = {
  name: Word('перерыть', 5),
  singular1stPerson: Word('перерою', 5),
  singular2ndPerson: Word('перероешь', 5),
  singular3rdPerson: Word('перероет', 5),
  plural1stPerson: Word('перероем', 5),
  plural2ndPerson: Word('перероете', 5),
  plural3rdPerson: Word('перероют', 5),
  masculinePast: Word('перерыл', 5),
  femininePast: Word('перерыла', 5),
  neuterPast: Word('перерыло', 5),
  pluralPast: Word('перерыли', 5),
  imperativeInformal: Word('перерой', 5),
  imperativeFormal: Word('переройте', 5),
  imperfect: [],
};

perfectVerbs.set(перерыть.name.text, перерыть);

export { перерыть };