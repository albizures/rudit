import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перенять: PerfectVerb = {
  name: Word('перенять', 5),
  singular1stPerson: Word('перейму', 6),
  singular2ndPerson: Word('переймёшь', 1),
  singular3rdPerson: Word('переймёт', 1),
  plural1stPerson: Word('переймём', 1),
  plural2ndPerson: Word('переймёте', 1),
  plural3rdPerson: Word('переймут', 6),
  masculinePast: Word('перенял//пе'ренял', 5),
  femininePast: Word('переняла', 7),
  neuterPast: Word('переняло//пе'реняло', 5),
  pluralPast: Word('переняли//пе'реняли', 5),
  imperativeInformal: Word('перейми', 6),
  imperativeFormal: Word('переймите', 6),
  imperfect: [],
};

perfectVerbs.set(перенять.name.text, перенять);

export { перенять };