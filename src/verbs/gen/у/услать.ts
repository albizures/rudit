import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const услать: PerfectVerb = {
  name: Word('услать', 3),
  singular1stPerson: Word('ушлю', 3),
  singular2ndPerson: Word('ушлёшь', 3),
  singular3rdPerson: Word('ушлёт', 3),
  plural1stPerson: Word('ушлём', 3),
  plural2ndPerson: Word('ушлёте', 3),
  plural3rdPerson: Word('ушлют', 3),
  masculinePast: Word('услал', 3),
  femininePast: Word('услала', 3),
  neuterPast: Word('услало', 3),
  pluralPast: Word('услали', 3),
  imperativeInformal: Word('ушли', 3),
  imperativeFormal: Word('ушлите', 3),
  imperfect: ['усылать','слать'],
};

perfectVerbs.set(услать.name.text, услать);

export { услать };