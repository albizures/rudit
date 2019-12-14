import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укрощаться: PerfectVerb = {
  name: Word('укрощаться', 5),
  singular1stPerson: Word('укрощаюсь', 5),
  singular2ndPerson: Word('укрощаешься', 5),
  singular3rdPerson: Word('укрощается', 5),
  plural1stPerson: Word('укрощаемся', 5),
  plural2ndPerson: Word('укрощаетесь', 5),
  plural3rdPerson: Word('укрощаются', 5),
  masculinePast: Word('укрощался', 5),
  femininePast: Word('укрощалась', 5),
  neuterPast: Word('укрощалось', 5),
  pluralPast: Word('укрощались', 5),
  imperativeInformal: Word('укрощайся', 5),
  imperativeFormal: Word('укрощайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(укрощаться.name.text, укрощаться);

export { укрощаться };