import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хлыстать: PerfectVerb = {
  name: Word('хлыстать', 5),
  singular1stPerson: Word('хлыщу', 4),
  singular2ndPerson: Word('хлыщешь', 2),
  singular3rdPerson: Word('хлыщет', 2),
  plural1stPerson: Word('хлыщем', 2),
  plural2ndPerson: Word('хлыщете', 2),
  plural3rdPerson: Word('хлыщут', 2),
  masculinePast: Word('хлыстал', 5),
  femininePast: Word('хлыстала', 5),
  neuterPast: Word('хлыстало', 5),
  pluralPast: Word('хлыстали', 5),
  imperativeInformal: Word('хлыщи', 4),
  imperativeFormal: Word('хлыщите', 4),
  imperfect: [],
};

perfectVerbs.set(хлыстать.name.text, хлыстать);

export { хлыстать };