import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опушить: PerfectVerb = {
  name: Word('опушить', 4),
  singular1stPerson: Word('опушу', 4),
  singular2ndPerson: Word('опушишь', 4),
  singular3rdPerson: Word('опушит', 4),
  plural1stPerson: Word('опушим', 4),
  plural2ndPerson: Word('опушите', 4),
  plural3rdPerson: Word('опушат', 4),
  masculinePast: Word('опушил', 4),
  femininePast: Word('опушила', 4),
  neuterPast: Word('опушило', 4),
  pluralPast: Word('опушили', 4),
  imperativeInformal: Word('опуши', 4),
  imperativeFormal: Word('опушите', 4),
  imperfect: [],
};

perfectVerbs.set(опушить.name.text, опушить);

export { опушить };