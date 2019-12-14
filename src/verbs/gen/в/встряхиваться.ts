import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встряхиваться: PerfectVerb = {
  name: Word('встряхиваться', 4),
  singular1stPerson: Word('встряхиваюсь', 4),
  singular2ndPerson: Word('встряхиваешься', 4),
  singular3rdPerson: Word('встряхивается', 4),
  plural1stPerson: Word('встряхиваемся', 4),
  plural2ndPerson: Word('встряхиваетесь', 4),
  plural3rdPerson: Word('встряхиваются', 4),
  masculinePast: Word('встряхивался', 4),
  femininePast: Word('встряхивалась', 4),
  neuterPast: Word('встряхивалось', 4),
  pluralPast: Word('встряхивались', 4),
  imperativeInformal: Word('встряхивайся', 4),
  imperativeFormal: Word('встряхивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(встряхиваться.name.text, встряхиваться);

export { встряхиваться };