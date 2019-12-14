import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дописать: PerfectVerb = {
  name: Word('дописать', 5),
  singular1stPerson: Word('допишу', 5),
  singular2ndPerson: Word('допишешь', 3),
  singular3rdPerson: Word('допишет', 3),
  plural1stPerson: Word('допишем', 3),
  plural2ndPerson: Word('допишете', 3),
  plural3rdPerson: Word('допишут', 3),
  masculinePast: Word('дописал', 5),
  femininePast: Word('дописала', 5),
  neuterPast: Word('дописало', 5),
  pluralPast: Word('дописали', 5),
  imperativeInformal: Word('допиши', 5),
  imperativeFormal: Word('допишите', 5),
  imperfect: [],
};

perfectVerbs.set(дописать.name.text, дописать);

export { дописать };