import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чокаться: PerfectVerb = {
  name: Word('чокаться', 1),
  singular1stPerson: Word('чокаюсь', 1),
  singular2ndPerson: Word('чокаешься', 1),
  singular3rdPerson: Word('чокается', 1),
  plural1stPerson: Word('чокаемся', 1),
  plural2ndPerson: Word('чокаетесь', 1),
  plural3rdPerson: Word('чокаются', 1),
  masculinePast: Word('чокался', 1),
  femininePast: Word('чокалась', 1),
  neuterPast: Word('чокалось', 1),
  pluralPast: Word('чокались', 1),
  imperativeInformal: Word('чокайся', 1),
  imperativeFormal: Word('чокайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(чокаться.name.text, чокаться);

export { чокаться };