import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебежать: PerfectVerb = {
  name: Word('перебежать', 7),
  singular1stPerson: Word('перебегу', 7),
  singular2ndPerson: Word('перебежишь', 7),
  singular3rdPerson: Word('перебежит', 7),
  plural1stPerson: Word('перебежим', 7),
  plural2ndPerson: Word('перебежите', 7),
  plural3rdPerson: Word('перебегут', 7),
  masculinePast: Word('перебежал', 7),
  femininePast: Word('перебежала', 7),
  neuterPast: Word('перебежало', 7),
  pluralPast: Word('перебежали', 7),
  imperativeInformal: Word('перебеги', 7),
  imperativeFormal: Word('перебегите', 7),
  imperfect: [],
};

perfectVerbs.set(перебежать.name.text, перебежать);

export { перебежать };