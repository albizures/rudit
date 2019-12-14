import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убыта: PerfectVerb = {
  name: Word('убыта', 4),
  singular1stPerson: Word('убуду', 2),
  singular2ndPerson: Word('убудешь', 2),
  singular3rdPerson: Word('убудет', 2),
  plural1stPerson: Word('убудем', 2),
  plural2ndPerson: Word('убудете', 2),
  plural3rdPerson: Word('убудут', 2),
  masculinePast: Word('убыл', 0),
  femininePast: Word('убыла', 4),
  neuterPast: Word('убыло', 0),
  pluralPast: Word('убыли', 0),
  imperativeInformal: Word('убудь', 2),
  imperativeFormal: Word('убудьте', 2),
  imperfect: [],
};

perfectVerbs.set(убыта.name.text, убыта);

export { убыта };