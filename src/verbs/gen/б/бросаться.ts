import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бросаться: PerfectVerb = {
  name: Word('бросаться', 4),
  singular1stPerson: Word('бросаюсь', 4),
  singular2ndPerson: Word('бросаешься', 4),
  singular3rdPerson: Word('бросается', 4),
  plural1stPerson: Word('бросаемся', 4),
  plural2ndPerson: Word('бросаетесь', 4),
  plural3rdPerson: Word('бросаются', 4),
  masculinePast: Word('бросался', 4),
  femininePast: Word('бросалась', 4),
  neuterPast: Word('бросалось', 4),
  pluralPast: Word('бросались', 4),
  imperativeInformal: Word('бросайся', 4),
  imperativeFormal: Word('бросайтесь', 4),
  imperfect: ['броситься'],
};

perfectVerbs.set(бросаться.name.text, бросаться);

export { бросаться };