import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опочить: PerfectVerb = {
  name: Word('опочить', 4),
  singular1stPerson: Word('опочию', 4),
  singular2ndPerson: Word('опочиешь', 4),
  singular3rdPerson: Word('опочиет', 4),
  plural1stPerson: Word('опочием', 4),
  plural2ndPerson: Word('опочиете', 4),
  plural3rdPerson: Word('опочиют', 4),
  masculinePast: Word('опочил', 4),
  femininePast: Word('опочила', 4),
  neuterPast: Word('опочило', 4),
  pluralPast: Word('опочили', 4),
  imperativeInformal: Word('опочий', 4),
  imperativeFormal: Word('опочийте', 4),
  imperfect: [],
};

perfectVerbs.set(опочить.name.text, опочить);

export { опочить };