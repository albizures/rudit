import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дрызгаться: PerfectVerb = {
  name: Word('дрызгаться', 2),
  singular1stPerson: Word('дрызгаюсь', 2),
  singular2ndPerson: Word('дрызгаешься', 2),
  singular3rdPerson: Word('дрызгается', 2),
  plural1stPerson: Word('дрызгаемся', 2),
  plural2ndPerson: Word('дрызгаетесь', 2),
  plural3rdPerson: Word('дрызгаются', 2),
  masculinePast: Word('дрызгался', 2),
  femininePast: Word('дрызгалась', 2),
  neuterPast: Word('дрызгалось', 2),
  pluralPast: Word('дрызгались', 2),
  imperativeInformal: Word('дрызгайся', 2),
  imperativeFormal: Word('дрызгайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(дрызгаться.name.text, дрызгаться);

export { дрызгаться };