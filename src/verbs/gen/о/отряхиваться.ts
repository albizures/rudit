import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отряхиваться: PerfectVerb = {
  name: Word('отряхиваться', 3),
  singular1stPerson: Word('отряхиваюсь', 3),
  singular2ndPerson: Word('отряхиваешься', 3),
  singular3rdPerson: Word('отряхивается', 3),
  plural1stPerson: Word('отряхиваемся', 3),
  plural2ndPerson: Word('отряхиваетесь', 3),
  plural3rdPerson: Word('отряхиваются', 3),
  masculinePast: Word('отряхивался', 3),
  femininePast: Word('отряхивалась', 3),
  neuterPast: Word('отряхивалось', 3),
  pluralPast: Word('отряхивались', 3),
  imperativeInformal: Word('отряхивайся', 3),
  imperativeFormal: Word('отряхивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отряхиваться.name.text, отряхиваться);

export { отряхиваться };