import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высморкаться: PerfectVerb = {
  name: Word('высморкаться', 1),
  singular1stPerson: Word('высморкаюсь', 1),
  singular2ndPerson: Word('высморкаешься', 1),
  singular3rdPerson: Word('высморкается', 1),
  plural1stPerson: Word('высморкаемся', 1),
  plural2ndPerson: Word('высморкаетесь', 1),
  plural3rdPerson: Word('высморкаются', 1),
  masculinePast: Word('высморкался', 1),
  femininePast: Word('высморкалась', 1),
  neuterPast: Word('высморкалось', 1),
  pluralPast: Word('высморкались', 1),
  imperativeInformal: Word('высморкайся', 1),
  imperativeFormal: Word('высморкайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(высморкаться.name.text, высморкаться);

export { высморкаться };