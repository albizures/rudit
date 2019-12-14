import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упиваться: PerfectVerb = {
  name: Word('упиваться', 4),
  singular1stPerson: Word('упиваюсь', 4),
  singular2ndPerson: Word('упиваешься', 4),
  singular3rdPerson: Word('упивается', 4),
  plural1stPerson: Word('упиваемся', 4),
  plural2ndPerson: Word('упиваетесь', 4),
  plural3rdPerson: Word('упиваются', 4),
  masculinePast: Word('упивался', 4),
  femininePast: Word('упивалась', 4),
  neuterPast: Word('упивалось', 4),
  pluralPast: Word('упивались', 4),
  imperativeInformal: Word('упивайся', 4),
  imperativeFormal: Word('упивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(упиваться.name.text, упиваться);

export { упиваться };