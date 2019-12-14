import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впиваться: PerfectVerb = {
  name: Word('впиваться', 4),
  singular1stPerson: Word('впиваюсь', 4),
  singular2ndPerson: Word('впиваешься', 4),
  singular3rdPerson: Word('впивается', 4),
  plural1stPerson: Word('впиваемся', 4),
  plural2ndPerson: Word('впиваетесь', 4),
  plural3rdPerson: Word('впиваются', 4),
  masculinePast: Word('впивался', 4),
  femininePast: Word('впивалась', 4),
  neuterPast: Word('впивалось', 4),
  pluralPast: Word('впивались', 4),
  imperativeInformal: Word('впивайся', 4),
  imperativeFormal: Word('впивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(впиваться.name.text, впиваться);

export { впиваться };