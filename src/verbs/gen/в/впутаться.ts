import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впутаться: PerfectVerb = {
  name: Word('впутаться', 2),
  singular1stPerson: Word('впутаюсь', 2),
  singular2ndPerson: Word('впутаешься', 2),
  singular3rdPerson: Word('впутается', 2),
  plural1stPerson: Word('впутаемся', 2),
  plural2ndPerson: Word('впутаетесь', 2),
  plural3rdPerson: Word('впутаются', 2),
  masculinePast: Word('впутался', 2),
  femininePast: Word('впуталась', 2),
  neuterPast: Word('впуталось', 2),
  pluralPast: Word('впутались', 2),
  imperativeInformal: Word('впутайся', 2),
  imperativeFormal: Word('впутайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(впутаться.name.text, впутаться);

export { впутаться };