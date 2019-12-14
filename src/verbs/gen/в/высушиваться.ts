import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высушиваться: PerfectVerb = {
  name: Word('высушиваться', 3),
  singular1stPerson: Word('высушиваюсь', 3),
  singular2ndPerson: Word('высушиваешься', 3),
  singular3rdPerson: Word('высушивается', 3),
  plural1stPerson: Word('высушиваемся', 3),
  plural2ndPerson: Word('высушиваетесь', 3),
  plural3rdPerson: Word('высушиваются', 3),
  masculinePast: Word('высушивался', 3),
  femininePast: Word('высушивалась', 3),
  neuterPast: Word('высушивалось', 3),
  pluralPast: Word('высушивались', 3),
  imperativeInformal: Word('высушивайся', 3),
  imperativeFormal: Word('высушивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(высушиваться.name.text, высушиваться);

export { высушиваться };