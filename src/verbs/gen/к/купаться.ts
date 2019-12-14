import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const купаться: PerfectVerb = {
  name: Word('купаться', 3),
  singular1stPerson: Word('купаюсь', 3),
  singular2ndPerson: Word('купаешься', 3),
  singular3rdPerson: Word('купается', 3),
  plural1stPerson: Word('купаемся', 3),
  plural2ndPerson: Word('купаетесь', 3),
  plural3rdPerson: Word('купаются', 3),
  masculinePast: Word('купался', 3),
  femininePast: Word('купалась', 3),
  neuterPast: Word('купалось', 3),
  pluralPast: Word('купались', 3),
  imperativeInformal: Word('купайся', 3),
  imperativeFormal: Word('купайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(купаться.name.text, купаться);

export { купаться };