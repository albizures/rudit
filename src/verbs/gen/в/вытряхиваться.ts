import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытряхиваться: PerfectVerb = {
  name: Word('вытряхиваться', 4),
  singular1stPerson: Word('вытряхиваюсь', 4),
  singular2ndPerson: Word('вытряхиваешься', 4),
  singular3rdPerson: Word('вытряхивается', 4),
  plural1stPerson: Word('вытряхиваемся', 4),
  plural2ndPerson: Word('вытряхиваетесь', 4),
  plural3rdPerson: Word('вытряхиваются', 4),
  masculinePast: Word('вытряхивался', 4),
  femininePast: Word('вытряхивалась', 4),
  neuterPast: Word('вытряхивалось', 4),
  pluralPast: Word('вытряхивались', 4),
  imperativeInformal: Word('вытряхивайся', 4),
  imperativeFormal: Word('вытряхивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(вытряхиваться.name.text, вытряхиваться);

export { вытряхиваться };