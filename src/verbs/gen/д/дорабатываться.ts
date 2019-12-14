import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дорабатываться: PerfectVerb = {
  name: Word('дорабатываться', 5),
  singular1stPerson: Word('дорабатываюсь', 5),
  singular2ndPerson: Word('дорабатываешься', 5),
  singular3rdPerson: Word('дорабатывается', 5),
  plural1stPerson: Word('дорабатываемся', 5),
  plural2ndPerson: Word('дорабатываетесь', 5),
  plural3rdPerson: Word('дорабатываются', 5),
  masculinePast: Word('дорабатывался', 5),
  femininePast: Word('дорабатывалась', 5),
  neuterPast: Word('дорабатывалось', 5),
  pluralPast: Word('дорабатывались', 5),
  imperativeInformal: Word('дорабатывайся', 5),
  imperativeFormal: Word('дорабатывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(дорабатываться.name.text, дорабатываться);

export { дорабатываться };