import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const принюхиваться: PerfectVerb = {
  name: Word('принюхиваться', 4),
  singular1stPerson: Word('принюхиваюсь', 4),
  singular2ndPerson: Word('принюхиваешься', 4),
  singular3rdPerson: Word('принюхивается', 4),
  plural1stPerson: Word('принюхиваемся', 4),
  plural2ndPerson: Word('принюхиваетесь', 4),
  plural3rdPerson: Word('принюхиваются', 4),
  masculinePast: Word('принюхивался', 4),
  femininePast: Word('принюхивалась', 4),
  neuterPast: Word('принюхивалось', 4),
  pluralPast: Word('принюхивались', 4),
  imperativeInformal: Word('принюхивайся', 4),
  imperativeFormal: Word('принюхивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(принюхиваться.name.text, принюхиваться);

export { принюхиваться };