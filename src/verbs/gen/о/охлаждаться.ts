import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охлаждаться: PerfectVerb = {
  name: Word('охлаждаться', 6),
  singular1stPerson: Word('охлаждаюсь', 6),
  singular2ndPerson: Word('охлаждаешься', 6),
  singular3rdPerson: Word('охлаждается', 6),
  plural1stPerson: Word('охлаждаемся', 6),
  plural2ndPerson: Word('охлаждаетесь', 6),
  plural3rdPerson: Word('охлаждаются', 6),
  masculinePast: Word('охлаждался', 6),
  femininePast: Word('охлаждалась', 6),
  neuterPast: Word('охлаждалось', 6),
  pluralPast: Word('охлаждались', 6),
  imperativeInformal: Word('охлаждайся', 6),
  imperativeFormal: Word('охлаждайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(охлаждаться.name.text, охлаждаться);

export { охлаждаться };