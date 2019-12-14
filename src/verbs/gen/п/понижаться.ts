import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понижаться: PerfectVerb = {
  name: Word('понижаться', 5),
  singular1stPerson: Word('понижаюсь', 5),
  singular2ndPerson: Word('понижаешься', 5),
  singular3rdPerson: Word('понижается', 5),
  plural1stPerson: Word('понижаемся', 5),
  plural2ndPerson: Word('понижаетесь', 5),
  plural3rdPerson: Word('понижаются', 5),
  masculinePast: Word('понижался', 5),
  femininePast: Word('понижалась', 5),
  neuterPast: Word('понижалось', 5),
  pluralPast: Word('понижались', 5),
  imperativeInformal: Word('понижайся', 5),
  imperativeFormal: Word('понижайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(понижаться.name.text, понижаться);

export { понижаться };